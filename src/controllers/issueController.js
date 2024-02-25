import { addProjectIssue, deleteIssue, filteredIssues } from "../models/issueSchema.js"
import {getProject} from "../models/projectSchema.js"

export default class IssueController {

    addIssue = async(req, res)=>{
        try{
            const {id} = req.params;
            const {title, description, labels, author} = req.body
            const issue = {title, description, labels, author, "projectId":id}
            await addProjectIssue(issue)
            res.redirect(`/${id}`)
        }catch(err){
            res.render(`404`, {msg:"something went wrong, try again later"})
        }
    }

    filterIssues = async(req, res)=>{
        try{
            const {id} = req.params
            const project = await getProject(id)
            const {labels, author} = req.body
            const issues = await filteredIssues(id, labels, author)
            res.render('projectDetails', {project, issues, filtered:true})
        }catch(err){
            res.render(`404`, {msg:"something went wrong, try again later"})
        }
    }

    deleteIssue = async(req, res)=>{
        try{
            const {id} = req.params
            const issue = await deleteIssue(id)
            res.redirect(`/${issue.projectId}`)
        }catch(err){
            res.render('404', {msg:"something went wrong, try again later"})
        }
    }
}