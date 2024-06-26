import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { selectDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector } from "@/stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const chartData = [35, 65];
  const data: ChartData = useMemo(() => {
    return {
      labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
      datasets: [
        {
          data: chartData,
          backgroundColor: colorScheme
            ? [getColor("danger", 0.6), getColor("theme.2", 0.6)]
            : "",
          hoverBackgroundColor: colorScheme
            ? [getColor("danger", 0.6), getColor("theme.2", 0.6)]
            : "",
          borderWidth: 1,
          borderColor: colorScheme
            ? [getColor("danger", 0.6), getColor("theme.2", 0.6)]
            : "",
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: "89%",
      rotation: -90,
      circumference: 180,
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="doughnut"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
