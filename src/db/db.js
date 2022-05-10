import {connect} from 'mongoose';
import { mongodbUri } from "../config/config";

export const connectDB = async()=>{
    
   try {
    await connect(mongodbUri);
    console.log('connect to mongoDb');
   } catch (error) {
       throw error
   }

}