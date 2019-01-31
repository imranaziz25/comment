export class Comment {
	private id: number;
	private userid: number;
	private linkid: number;
	private comment: string;
  constructor(id: number, userid: number, linkid: number, comment: string) 
   { 
     this.id = id; 
	 this.userid = userid;
	 this.linkid = linkid;
	 this.comment = comment; 
	}	 
}