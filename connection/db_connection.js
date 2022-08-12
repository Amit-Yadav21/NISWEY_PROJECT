const fs = require('fs')

const knex = require('knex')({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        database: "customer_details",
        password: "Amit@123"
    }

})

knex.schema.createTable("customer_data", t => {
    t.increments().primary()
    t.string("date")
    t.string("Age")
    t.string("Industry")
    t.string("Job_title")
    t.string("Annual_salary")
    t.string("Currency")
    t.text("Location")
    t.string("Work_experience")
    t.text("Additional_context")
    t.string("Other_currency")
})
    .then(async () => {
        const data1 = fs.readFileSync('../csvtojson/users.json')
        const data = JSON.parse(data1)
        // console.log(data);


        let count = 0
        for (i of data) {
            await knex('customer_data').insert({
                date: i['Timestamp'],
                Age: i['How old are you?'],
                Industry: i['What industry do you work in?'],
                Job_title: i['Job title'],
                Annual_salary: i['What is your annual salary?'],
                Currency: i['Please indicate the currency'],
                Location: i['Where are you located? (City/state/country)'],
                Work_experience: i['How many years of post-college professional work experience do you have?'],
                Additional_context: i['If your job title needs additional context, please clarify here:'],
                Other_currency: i['If \"Other,\" please indicate the currency here:']
            })
            count += 1
            console.log(count);
        }
    })
    .catch((err) => {
        // console.log(err);
    })

module.exports = knex