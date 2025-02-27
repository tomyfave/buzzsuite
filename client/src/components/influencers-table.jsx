import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "../Utils";

class InfluencersTable extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Accounts",
              columns: [
                {
                  Header: "Account",
                  accessor: "account"
                },
                {
                  Header: "Channel",
                  id: "channel",
                  accessor: d => d.channel
                },
                {
                  Header: "Product",
                  id: "product",
                  accessor: d => d.product
                },
                {
                  Header: "username",
                  id: "username",
                  accessor: d => d.username
                }
              ]
            },
            {
              Header: "Metrics",
              columns: [
                {
                  Header: "CPM",
                  id: "cpm",
                  accessor: d => d.cpm
                },
                {
                  Header: "CPC",
                  id: "cpc",
                  accessor: d => d.cpc
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default InfluencersTable;
