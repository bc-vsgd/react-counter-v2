const reset = (ind, tab, setTab) => {
  if (tab[ind].num !== 0) {
    const newTab = [...tab];
    newTab[ind].num = 0;
    setTab(newTab);
  }
};

export default reset;
