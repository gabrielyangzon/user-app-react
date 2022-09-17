import React  from "react";
import { Grid } from "gridjs-react";


const UserGrid = (props : any) => {
   return <div style={styles}>
              <Grid
                width="70"
                data={props.data}
                columns={['Name', 'Email' , 'Phone']}
                search={true}
                pagination={{
                  enabled: true,
                  limit: 10,
                }}
              />
          </div>
}

const styles = {
   margin: "auto"
}

export default UserGrid;