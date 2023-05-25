// const getData = async () => {
//   try {
//     const response = await fetch("../data/schema.json");

//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     return response.json();
//     // const data = await response.json();
//     // console.log(data);
//     // return data;
//   } catch (error) {
//     console.error("Error fetching the schema:", error);
//   }
// };

const getData = async () => {
  const res = fetch("schema.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(function (response) {
    return response.json();
  });

  return await res;
};

const formatChannelsData = (data) => {
  const { channels } = data;
  console.log("channels", channels);
  return [...channels];
};

const formatOptionalsData = (data) => {
  const { optionals } = data;
  console.log(optionals[0]);
  const { optional1, optional2 } = optionals[0];
  console.log("options", optional1, optional2);
  return [optional1, optional2];
};

const getFormattedData = async () => {
  const channelsData = await getData();
  const optionalsData = await getData();

  console.log("asgjsj", channelsData);
  const formattedChannelsData = formatChannelsData(channelsData);
  const formattedOptionalsData = formatOptionalsData(optionalsData);

  return { channels: formattedChannelsData, optionals: formattedOptionalsData };
};

export { getFormattedData };
