import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    labels:{
        type:[String],
        required:true,
        enum:["Bug", "Duplicate", "Update", "SyntaxError", "Fix Typo"]
    },
    author:{
        type:String,
        required:true,
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    }
});

const issueModel = mongoose.model("Issue", IssueSchema)

export const addProjectIssue = async(issue)=>{
    const newIssue = new issueModel(issue)
    await newIssue.save()
    return
}

export const getProjectIssue = async(id)=>{
    const issues = await issueModel.find({projectId:id})
    return issues
}

export const filteredIssues = async(id, labels, author)=>{
    const filter = {}
    filter.projectId = id
    if(labels && labels.length>0){
        filter.labels = {$in:labels};
    }

    if(author){
        filter.author = author
    }
    const issues = await issueModel.find(filter)
    return issues
}

export const deleteIssue = async(id)=>{
    const issue = await issueModel.findByIdAndDelete({_id:id})
    return issue
}