import benchmark_reader as br
import benchmark_plotter as bp
import matplotlib.pyplot as plt
import logging

logger = logging.getLogger(__name__)
BENCHMARKS_DIR = "samples/__benchmark__"
REPORT_ASSETS_DIR = "reports/__assets__"


def main():
    benchmarkReader = br.BenchmarkReader(dir=BENCHMARKS_DIR)
    benchmarks = benchmarkReader.getResult()

    benchmarkPlotter = bp.BenchmarkPlotter(benchmarks=benchmarks, dir=REPORT_ASSETS_DIR)
    benchmarkPlotter.plot()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    logger.info("Generating benchmark report")
    main()
    logger.info("Benchmark report generated")
