const express=require("express")
const router=express.Router()
const {get_data_by_id,get_all}=require("../controller/salary")

// get employee dat by id .
router.get("/salaries/:id",get_data_by_id)

// salaries?sort=Job_title&order=asc&currency=USD
router.get("/salaries",get_all)


module.exports=router