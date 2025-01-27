import pandas as pd
import matplotlib.pyplot as plt
import os

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
        }
        self.metrics = [
            "Memory used",
            "Program time",
            "Check time",
            "Total time",
        ]

    def plot(self):
        for metric in self.metrics:
            self._plotMetric(metric)

    def _plotMetric(self, metric: str):
        df = self.benchmarks.reset_index()
        df = df[["Name", "Library", metric]]
        df = df.sort_values(by=[metric], ascending=False)
        grouped = df.groupby(by=["Name"])
        
        fig = plt.figure(figsize=(8, 12))
        fig.suptitle(f'{metric} comparison', fontsize=24)

        for i, (names, group) in enumerate(grouped):
            ax = plt.subplot(len(grouped), 1, i + 1)
            colors = [self.colorMap[lib] for lib in group["Library"]]
            ax.barh(y=group["Library"], width=group[metric], color=colors)
            ax.set_title(names[0])
            ax.plot()

        plt.subplots_adjust(wspace=0, hspace=0.5)
        plt.savefig(os.path.join(self.dir, f"{metric}.png"))
