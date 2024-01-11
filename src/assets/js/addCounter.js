const addCounter = (tab, setTab) => {
  let ind = tab[tab.length - 1].ind;
  if (ind < 2) {
    ind++;
    const newTab = [...tab];
    newTab.push({ ind: ind, num: 0 });
    setTab(newTab);
  }
};

export default addCounter;
