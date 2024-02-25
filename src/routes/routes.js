import express from "express";
import ProjectController from "../controllers/projectController.js";
import IssueController from "../controllers/issueController.js";

const ProjectRoute = express.Router();

const projectController = new ProjectController();
const issueController = new IssueController();

ProjectRoute.get("/", projectController.getProjects)
ProjectRoute.get("/:id", projectController.getProjectDetail)
ProjectRoute.post("/add", projectController.addProject)
ProjectRoute.get("/:id/deleteproject", projectController.deleteProject)
ProjectRoute.get("/:id/deleteissue", issueController.deleteIssue)
ProjectRoute.post("/:id/addissue", issueController.addIssue)
ProjectRoute.post("/:id/filter", issueController.filterIssues)

export default ProjectRoute;