import pandas as pd
import matplotlib.pyplot as plt
import os

import logging

logger = logging.getLogger(__name__)


class BenchmarkPlotter:
    def __init__(self, benchmarks: pd.DataFrame, dir: str):
        cwd = os.getcwd()
        self.dir = os.path.join(cwd, dir)
        self.benchmarks = benchmarks
        self.colorMap = {
            "effect": "#1f77b4",
            "io-ts": "#ff7f0e",
            "typebox": "#2ca02c",
            "typescript": "#d62728",
            "valibot": "#9467bd",
            "yup": "#8c564b",
            "zod": "#e377c2",
            "zod4": "#ffd700",
        }
        self.metrics = [
            {"name": "Memory used", "unit": "Megabytes"},
            {"name": "Program time", "unit": "Seconds"},
            {"name": "Check time", "unit": "Seconds"},
            {"name": "Total time", "unit": "Seconds"},
            {"name": "Identifiers", "unit": "Count"},
            {"name": "Types", "unit": "Count"},
            {"name": "Symbols", "unit": "Count"},
            {"name": "I/O Read time", "unit": "Seconds"},
            {"name": "Files", "unit": "Count"},
            {"name": "Parse time", "unit": "Seconds"},
        ]

    def plot(self):
        logger.info("Plotting benchmarks")
        for metric in self.metrics:
            self._plotMetric(metricName=metric["name"], unit=metric["unit"])

    def _plotMetric(self, metricName: str, unit: str):
        df = self.benchmarks.reset_index()
        df = df[["Name", "Library", metricName]]
        df = df.sort_values(by=[metricName], ascending=False)
        grouped = df.groupby(by=["Name"])

        ncols = 2
        nrows = len(grouped) // ncols + len(grouped) % ncols
        fig, axes = plt.subplots(ncols=ncols, nrows=nrows, figsize=(ncols * 8, nrows * 2.4))
        fig.suptitle(f"{metricName} comparison", fontsize=24)

        # Clear axes
        for i, (names, group) in enumerate(grouped):
            ax = axes[i // ncols, i % ncols]
            colors = [self.colorMap[lib] for lib in group["Library"]]
            ax.barh(y=group["Library"], width=group[metricName], color=colors)
            ax.set_title(names[0])
            ax.set_xlabel(unit)

        remaining = len(grouped) % ncols
        for i in range(remaining):
            # Remove empty axes
            ax = axes[nrows-1, ncols-i-1]
            fig.delaxes(ax)

        fileName = metricName.replace(" ", "_").replace("/", "_").lower()
        plt.subplots_adjust(wspace=0.2, hspace=1)
        plt.savefig(os.path.join(self.dir, f"{fileName}.png"))
