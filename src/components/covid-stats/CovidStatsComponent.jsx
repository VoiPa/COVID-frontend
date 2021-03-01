import React, { useEffect, useState } from "react";
import _ from "lodash";
import { ResponsiveLine } from "@nivo/line";

const CovidStatsComponent = ({ collection }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (_.size(collection)) {
      const rawCases = _.filter(
        collection,
        (item) => item.indicator === "cases"
      );
      const rawDeaths = _.filter(
        collection,
        (item) => item.indicator === "deaths"
      );
      const formatedCases = _.map(rawCases, (item) => ({
        x: item.year_week,
        y: item.weekly_count,
      }));
      const formatedDeaths = _.map(rawDeaths, (item) => ({
        x: item.year_week,
        y: item.weekly_count,
      }));

      const formatedData = [
        {
          id: "Cases",
          color: "hsl(2, 70%, 50%)",
          data: formatedCases,
        },
        {
          id: "Death",
          color: "hsl(300, 70%, 50%)",
          data: formatedDeaths,
        },
      ];
      setData(formatedData);
    }
  }, [collection]);
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.0f"
      curve="natural"
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 75,
        legend: "transportation",
        legendOffset: 51,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      enablePointLabel={true}
      pointLabelYOffset={-16}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 107,
          translateY: 15,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default CovidStatsComponent;
