import  mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})


const projectModel = mongoose.model("Project", ProjectSchema);

export const add = async(project)=>{
    const newProject = new projectModel(project)
    await newProject.save()
    return newProject
}

export const getAllProjects = async()=>{
    const projects = await projectModel.find()
    return projects
}

export const getProject = async(id)=>{
    const project = await projectModel.findById(id)
    return project
}

export const deleteProject = async(id)=>{
    await projectModel.deleteOne({_id:id})
    return
}