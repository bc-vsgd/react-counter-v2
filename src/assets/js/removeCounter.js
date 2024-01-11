const removeCounter = (tab, setTab) => {
  if (tab.length > 1) {
    const newTab = [...tab];
    newTab.pop();
    setTab(newTab);
  }
};

export default removeCounter;
