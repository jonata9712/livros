import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://jonatamatheusb:V6Cll2eHwmonEz2e@alura.etpsg0n.mongodb.net/alura-node?retryWrites=true&w=majority')

let db = mongoose.connection

export default db;