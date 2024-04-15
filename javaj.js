const mongoose = require('mongoose');

// Схема для календарного розкладу
const scheduleSchema = new mongoose.Schema({
    date: { type: String, required: true },
    subjects: [{ type: String }]
});

// Модель календарного розкладу
const Schedule = mongoose.model('Schedule', scheduleSchema);

// Параметри підключення до бази даних MongoDB
const username = 'Dima441';
const password = 'Dima411';
const clusterName = 'cluster0';
const dbName = 'mydatabase';
const uri = `mongodb+srv://${username}:${password}@${clusterName}.won76bq.mongodb.net/${dbName}`;

// Підключення до бази даних
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Підключено до бази даних MongoDB!');
        // Збереження календарного розкладу в базу даних
        const scheduleData = [
            {
                date: "15.04.2024 Понеділок",
                subjects: [
                    "Іноземна мова (за проф.спрям) (Пр) збірна група В2(3)_н1",
                    "Основи програмування (Пр)",
                    "Основи роботи з нейронними мережами (Пр)"
                ]
            },
            {
                date: "16.04.2024 Вівторок",
                subjects: [
                    "Іноземна мова (за проф.спрям) (Пр) збірна група В2(3)_н1",
                    "Основи програмування (Пр)",
                    "Математичний аналіз (Пр)"
                ]
            },
            {
              date: "17.04.2024 Середа",
              subjects: [
                "Українська мова (за проф.спрям.) (Пр)",
                "Основи програмування (Пр)",
               "Основи роботи з нейронними мережами (Пр)"
              ]
          },
             {
            date: "18.04.2024 Четвер",
            subjects: [
              "Математичний аналіз (Пр)",
              "Іноземна мова (за проф.спрям) (Пр)",
            ] 
        },
        {
            date: "19.04.2024 П'ятниця",
            subjects: [
              "Критичне мислення (Л)",
              "Українська мова (за проф.спрям.) (Пр)",
              "Інформаційно-комунікаційні технології (Пр)"
            ]
        },
         
           
        ];

        Schedule.insertMany(scheduleData)
            .then(() => {
                console.log('Розклад успішно збережено в базі даних!');
            })
            .catch(error => {
                console.error('Помилка збереження розкладу в базі даних:', error);
            });
    })
    .catch((error) => {
        console.error('Помилка підключення до бази даних MongoDB:', error);
    });
