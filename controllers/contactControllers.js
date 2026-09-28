import Contact from "../models/contact.js";

const getContacts = async (req, res) => {
  const contacts = await Contact.find();

  res.json({
    contacts,
  });
};

const postContact = async (req, res) => {
  const { name, phone, email } = req.body;

  const contact = new Contact({ name, phone, email });

  await contact.save();

  res.json({
    msg: "Contacto nuevo guardado!",
    contact,
  });
};

const putContact = (req, res) => {
  res.json({
    msg: "PUT de Router",
  });
};

const deleteContact = (req, res) => {
  res.json({
    msg: "DELETE de Router",
  });
};

export { getContacts, postContact, putContact, deleteContact };
