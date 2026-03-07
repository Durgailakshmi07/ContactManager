import Contact from "../models/Contact.js";

export const createContact = async(req,res)=>{
    const contact = await Contact.create({
        user:req.user.id,
        ...req.body
    });

    res.json(contact);
};

export const getContacts = async(req,res)=>{
    const contacts = await Contact.find({user:req.user.id});
    res.json(contacts);
};

export const updateContact = async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({message:"Contact not found"});
    }

    const updated = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.json(updated);
};

export const deleteContact = async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({message:"Contact not found"});
    }

    await contact.deleteOne();

    res.json({message:"Contact deleted"});
};