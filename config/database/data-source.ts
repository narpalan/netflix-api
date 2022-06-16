import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type:'mysql',
  host:'0.0.0.0',
  port: 49153,
  username:'root',
  password:'mysqlpw',
  database:'netflix',
  entities: ["src/entities/*.entity.ts"],
  synchronize: true
})

function runDatabase(){
  AppDataSource.initialize()
  .then(()=>{
    console.log("DataSource connected");    
  })
  .catch((e:Error)=>{
    console.log(e);
  })
}

export default runDatabase;
