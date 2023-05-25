const getData = async () => {
  try {
    const response = await fetch("schema.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error("Error fetching the schema:", error);
  }
};

// const getData = async () => {
//   const response = fetch("schema.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   }).then((data) => response.json());

//   return response;
// };

const formatChannelsData = (data) => {
  const { channels } = data;
  // console.log("channels", channels);
  return [...channels];
};

const formatOptionalsData = (data) => {
  const { optionals } = data;
  // console.log(optionals[0]);
  return optionals[0];
};

const getFormattedData = async () => {
  const channelsData = await getData();
  const optionalsData = await getData();

  const formattedChannelsData = formatChannelsData(channelsData);
  const formattedOptionalsData = formatOptionalsData(optionalsData);

  return { channels: formattedChannelsData, optionals: formattedOptionalsData };
};

export { getFormattedData };
