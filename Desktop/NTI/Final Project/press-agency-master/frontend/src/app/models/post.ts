export interface Post {
    authorId:string ,
    title:string ,
    content :string,
    articleType:string ,
    articleStatus:string 
}
//  {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "user",

// },
//  {
//     type: String,
//     required: true,
//     trim: true,
// },
//  {
//     type: String,
//     required: true,
//     trim: true,
// },
// articleType: {
//     type: String,
//     enum: ["sports", "cinema", "politics", "religion"],
//     required: true,
// },
//  {
//     type: String,
//     enum: ["accepted", "pending", "refused"],
//     default: "pending",
// },
// image: {
//     type: String,
// },
// numberOfViewers: {
//     type: Number,
//     default: 0,
//     min: 0,
// },
// likes: [{
//     userID: {
//         type: mongoose.Schema.Types.ObjectId,

//         require: true,
//     },
// }, ],
// numberOfLikes: {
//     type: Number,
//     default: 0,
//     min: 0,
// },
// comments: [{
//     userID: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "user",
//     },
//      {
//         type: String,
//         required: true,
//     },
// }, ],