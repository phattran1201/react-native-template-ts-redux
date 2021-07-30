const getLatestVersion = async () => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/');
    const { version } = await res.json();
    return version;
  } catch (error) {
    console.log(error);
    return '1.0.0';
  }
};

export default getLatestVersion;
