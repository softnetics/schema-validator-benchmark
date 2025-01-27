import pandas as pd
import os
import re


class BenchmarkReader:
    def __init__(self, dir: str):
        cwd = os.getcwd()

        self.dir = os.path.join(cwd, dir)
        self.files = [os.path.join(self.dir, file) for file in os.listdir(self.dir)]
        self.metrics = [
            "Memory used",
            "Program time",
            "Bind time",
            "Check time",
            "Emit time",
            "Total time",
        ]
        self.benchmarks = self._buildBenchmarks(self.metrics, self.files)

    def _buildBenchmarks(self, metrics: list[str], files: list[str]):
        df = pd.DataFrame(columns=metrics)
        for file in files:
            df = pd.concat([df, self._readBenchmark(metrics, file)], ignore_index=True)
        return self._cleanBenchmarks(df)
    
    def _cleanBenchmarks(self, df: pd.DataFrame):
        # Group by the Name, Library columns and remove Attempt column
        df = df.groupby(["Name", "Library"]).mean().drop(columns=["Attempt"])
        return df

    def _readBenchmark(self, metrics: list[str], path: str):
        df = pd.DataFrame(columns=metrics)

        with open(path) as f:
            lines = f.readlines()
            for line in lines:
                [header, value] = [
                    line.split(":")[0].strip(),
                    line.split(":")[1].strip(),
                ]
                if header in metrics:
                    df.loc[0, header] = float(value[0:-1])

        [testCaseName, library, attempt, extension] = os.path.basename(path).split(".")

        df.loc[0, "Name"] = os.path.basename(testCaseName)
        df.loc[0, "Library"] = os.path.basename(library)
        # Extract the attempt number from the file name
        df.loc[0, "Attempt"] = int(re.search(r"\d+", attempt).group(0))
        return df

    def getResult(self):
        return self.benchmarks
