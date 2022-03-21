# Build Your Own Blog (BYOB template from WEBPRISM

This template/repository is intended to be a tutorial that someone with no knowledge of programming can follow to create their own blog - **for free**. If you have any problems deploying this project, message me [here](https://tawk.to/devinatwebprism).

[Check out the demo site](https://simple-blog.webprism.xyz/)

[Video walkthrough](https://youtu.be/Ze1TI6y4pnY)

## Before You Begin
To build this project, you'll need 
- a [Github](https://github.com/) account
- a [Sanity](https://sanity.io/) account
- [Node.js](https://nodejs.org/en/) installed on your computer
- A text editor of some sort - could be Notepad, TextEdit, or an editor like [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/)

## Let's Go
1. Open Terminal, and install the Sanity command line with `npm i -g @sanity/cli && sanity start`. This will start a new Sanity project.
2. Follow the prompts until it's time to select a "schema", it will give you a few options, including "Blog" - chose "Blog".
3. Once you've created your Sanity project, deploy it with `sanity deploy`. Chose a unique name.
4. Go to [sanity.io/manage](https://sanity.io/manage), open your project settings, and find "Project Id".
5. Copy your project ID. We'll need it in a moment.
6. Click the link under "Studio URL". It will look something like `yourprojectname.sanity.studio"
7. Log in, and click "Posts", then the icon to create a new post.
8. Create your post and click "Publish"

## The Code Part

1. Clone the [template repository](https://github.com/webprismdevin/easiest-blog). You can either use the Git command line, or click the "Code" button and "Download ZIP" and open the ZIP file.
2. Open index.html in your text editor in your new folder you just downloaded.
3. On line 16 of the index.html file, change`'0ggffobx` to your project ID. The file has a comment to show you where.
4. Open post.html and change the project ID on line 23 and line 33 to your project ID.

Sweet! That's all of the code!

## Great! Now it's time to get your code on Github

1. Go to github.com and log in.
2. Go to Repositories and click the green "New" button
3. Give your new repo a name and hit "Create repository"
4. In the blue box, select "upload an existing file".
5. Drag your files into the box! Be sure to drag the files & folders inside your main folder, not the main folder itself.
6. Once it's done, hit "Commit changes"

Now it's time to deploy your project on Vercel.

1. Go to Vercel.com and log in with your Github account 
2. Click the "+ New Project" button.
3. Select your Github repository by hitting the blue "Import Button" next to it's name.
4. Click the big blue "Deploy" button.
5. Once it's done, copy the unique url it displays to access your app.

### We're almost there! Let's deploy.

1. Go to sanity.io/manage and select your project
2.. Under "API", scroll down to the "CORS origins" section. Click "+ Add CORS origin".
Paste the url you just copied into the text box under "origin". Click save.
Go to your url and refresh the page.

Your blog will now load!
