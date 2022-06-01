import express from "express";
import { getContacts,addContact } from '../../controllers/contacts/controllerContact.js'
const contactRouter = express.Router()

contactRouter.get('/', getContacts)
contactRouter.post('/', addContact)

export default contactRouter; 