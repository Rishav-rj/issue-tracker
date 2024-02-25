import { render } from "ejs";
import { getProjectIssue } from "../models/issueSchema.js";
import { add, deleteProject, getAllProjects, getProject } from "../models/projectSchema.js"

export default class ProjectController {

    getProjects = async(req, res)=>{
        try{
            const projects = await getAllProjects()
            res.render('home', {projects})
        }catch(err){
            res.render('404', {msg:"Not able to access projects, try again later"})
        }
    }

    getProjectDetail = async(req, res)=>{
        try{
            const {id} = req.params
            const project = await getProject(id)
            const issues = await getProjectIssue(id)
            res.render('projectDetails', {project, issues, filtered:false})
        }catch(err){
            res.render('404', {msg:"Project details not found"})
        }
    }

    addProject = async(req, res)=>{
        try{
            await add(req.body)  
            res.redirect('/');
        }catch(err){
            res.render('404', {msg:"something went wrong, try again later"})
        }
    }

    deleteProject = async(req, res)=>{
        try{
            const {id} = req.params
            await deleteProject(id)
            res.redirect('/');
        }catch(err){
            res.render('404', {msg:"something went wrong, try again later"})
        }
    }
}