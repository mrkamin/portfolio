
export const project = {
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


export const secondproject = {
    name: 'secondproject',
    title: 'SecondProjects',
    type: 'document',
    fields: [
        {
            name: 'pname',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'pslug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'pimage',
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
            name: "pdescription",
            title: "Discription",
            type: "array",
            of: [{type: "block"}]
        },
    ]
};
