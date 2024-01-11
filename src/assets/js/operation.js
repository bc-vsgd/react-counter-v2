const operation = (ind, tab, setTab, sign) => {
  let num = tab[ind].num;
  if (sign === "-") {
    num--;
  } else if (sign === "+") {
    num++;
  }
  const newTab = [...tab];
  newTab[ind].num = num;
  setTab(newTab);
};

export default operation;
