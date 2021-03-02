const { withStyles, Tabs } = require("@material-ui/core");

export const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 100,
      width: "100%",
      backgroundColor: "#f1684e",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
