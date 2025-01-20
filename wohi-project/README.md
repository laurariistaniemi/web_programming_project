# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Laura Riistaniemi, Joensuu, Web Programming 1, 2024
You should also add a README.md file in which you describe your project and the features, and the instructions to run it.
My project is a thesis progress tracking website, built on React and Vite. 

Home:
On the front page/Home page there is a welcome card, explaining a bit about the intended use of the site. Underneath a photo of a notebook.
Active tab is shown as a blue 'button'.

To Do:
Lists to save tasks and keep track of them, local storage only
On the To Do page there are two components:
    My To Do lists
        -User can input text in the 'enter a new list title' form, and then click on the 'add a new list' button, to create a new list 
        -One list is given automatically, 'my first list'
        -User can click inbetween the first list and new lists they create, and the lists hold different tasks the user has created depending on which list was 'active' when adding the new task, active list is blue
    Tasks
        -When the user creates a new task, it will show as a checkbox infront of the task name, the user can check the checkbox when they want
            -----At the moment when clicking one checkbox, all the other checkboxes in the same list also gets marked
        -At the right end of the task is a red 'remove' button, that removes the task that was chosen

Habits:
On the Habits page there is:
Keep track of pixels and show them in a graph, this can be interpretated as tasks done, commits in code done, etc. Hard coded to be my personal Pixe.la profile and graph 'test-graph' for sake of simplicity 
    Add pixel
        -'Enter quantity' form input will only let the user input numbers, on the far right is also arrow buttons which the user can use to choose the correct number of pixels to add to the graph, does not allow strings
    Graph stats
        -Shows all the commits made to the graph, dates when the commits were made etc.
    Refresh Graph
        -Button that ideally would refresh the graph or even just the whole page, but not working now and I will return it as not working button
    My Pixela Graph
        -Shows the visual import of the 'test-graph'in iframe that has the same data has as 'Graph stats'



The application should have at least 3 different “screens” with different features (using react-router or equivalent)
    Home, To Do, Habits -- all used with Router

The application should use third-party libraries for style/functionality(e.g., react-bootstrap, react-google-maps, react-beautiful-dnd, react-image-crop, etc.)
    Bootstrap

The application should use an external API (https://github.com/public-apis/public-apis) to retrieve / write data/images.
    Pixela, (local Storage)

