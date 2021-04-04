import { Component } from "react";

const botConfigs = {
  2: {
    mode: null,
    botId: "10",
    status: "ACTIVE",
  },
  1: {
    mode: "A",
    botId: "20",
    status: "ACTIVE",
  },
  3: {
    mode: "C",
    botId: "15",
    status: "STOPPED",
  },
};

export default class AppClass extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterConfigsByBot = (key) => {
    return botConfigs[key].botId !== "0";
  };

  filterConfigsByStatus = (key) => {
    return botConfigs[key].status !== "STOPPED";
  };

  handleClick = () => {
    const filteredAndSortedBotConfigs = Object.keys(botConfigs)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .filter(this.filterConfigsByBot)
      .filter(this.filterConfigsByStatus)
      .filter((key) => botConfigs[key].mode === null)
      .map((key) => botConfigs[key]);

    console.log(filteredAndSortedBotConfigs);

    const filteredAndSortedBotConfigs2 = Object.keys(botConfigs)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .filter(
        (key) =>
          botConfigs[key].botId !== "0" &&
          botConfigs[key].status !== "STOPPED" &&
          botConfigs[key].mode === null
      )
      .map((key) => botConfigs[key]);

    console.log(filteredAndSortedBotConfigs2);

    const filteredAndSortedBotConfigs3 = Object.keys(botConfigs)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .reduce((acc, curr) => {
        if (
          botConfigs[curr].botId !== "0" &&
          botConfigs[curr].status !== "STOPPED" &&
          botConfigs[curr].mode === null
        ) {
          acc.push(botConfigs[curr]);
        }
        return acc;
      }, [] as any[]);

    console.log(filteredAndSortedBotConfigs3);
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
