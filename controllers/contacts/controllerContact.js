import Contact from "../../models/Contact.js"

export const getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.json(contacts)
}

export const addContact = async (req, res) => {
    try {
        let contact = new Contact(req.body)
        let contactStored = await contact.save()
        res.status(200).json(contactStored)

    } catch (error) {
        console.log(error)
    }
}