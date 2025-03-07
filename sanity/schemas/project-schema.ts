
const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields:[
                { 
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                
                }
            ]
        },
        {
            name: 'livedemo',
            title: 'Live Demo',
            type: 'url',
        },
        {
            name: 'github',
            title: 'Github',
            type: 'url',
        },
        {
            name: "description",
            title: "Discription",
            type: "array",
            of: [{type: "block"}]
        },
        {
            name: "program",
            title: "Program",
            type: "array",
            of: [{type: "block"}]
        }
    ]
};

export default project;