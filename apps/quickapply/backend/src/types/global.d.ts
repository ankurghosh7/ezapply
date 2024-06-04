import { Types } from "mongoose";
import { Request, Response } from "express";
type CompanyDetailsSType = {
    companyRegisterId: Types.ObjectId;
    name: string;
    logo: string;
    coverImage: string;
    tagsLins: string[];
    infoTags: string[];
    socialLinks: Map<string, string>;
    industry: string[];
    description: string;
    featuresGoles: string[];
    founded: Map<string, string>;
    address: Map<string, string>;
    isVarified: boolean;
};


type ReqResType = {
    req: Request;
    res: Response;
};
export type { CompanyDetailsSType, ReqResType };
