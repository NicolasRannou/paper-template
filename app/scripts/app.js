(function(window, document, undefined) {
  'use strict';

  var app = document.querySelector('#fnndscbabymriorg');
  app.chapters = [
            {id: 'home', label: 'home',
            style: {
              color: '#2196F3',
              accent: '#1DE9B6'
            },
            pages: [
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false}
            ]},
            {id: 'mri', label: 'mri',
            style: {
              color: '#4CAF50',
              accent: '#1DE9B6'
            },
            pages: [
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false},
              {id:'members', label: 'members', element: 'introduction-element', appended: false},
              {id:'contact', label: 'contact', element: 'introduction-element', appended: false},
              {id:'studies', label: 'studies', element: 'introduction-element', appended: false}
            ]},
            {id: 'meg', label: 'meg',
            style: {
              color: '#E91E63',
              accent: '#1DE9B6'
            },
            pages: [
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false},
              {id:'members', label: 'members', element: 'introduction-element', appended: false},
              {id:'contact', label: 'contact', element: 'introduction-element', appended: false},
              {id:'studies', label: 'studies', element: 'introduction-element', appended: false}
            ]},
            {id: 'nirs', label: 'nirs',
            style: {
              color: '#9C27B0',
              accent: '#1DE9B6'
            },
            pages: [
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false},
              {id:'members', label: 'members', element: 'introduction-element', appended: false},
              {id:'contact', label: 'contact', element: 'introduction-element', appended: false},
              {id:'studies', label: 'studies', element: 'introduction-element', appended: false}
            ]},
            {id: 'hpc', label: 'hpc',
            style: {
              color: '#F44336',
              accent: '#1DE9B6'
            },
            pages: [
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false},
              {id:'members', label: 'members', element: 'introduction-element', appended: false},
              {id:'contact', label: 'contact', element: 'introduction-element', appended: false}
            ]},
            {id: 'softwares', label: 'softwares',
            style: {
              color:'#607D8B',
              accent: '#76FF03'
            },
            pages:[
              {id:'introduction', label: 'introduction', element: 'introduction-element', appended: false},
              {id:'hackers', label: 'hackers', element: 'introduction-element', appended: false}, 
              {id:'chris', label: 'chris', element: 'introduction-element', appended: false},
              {id:'xtk', label: 'xtk', element: 'introduction-element', appended: false},
              {id:'medview', label: 'medview', element: 'introduction-element', appended: false},
              {id:'slicedrop', label: 'slicedrop', element: 'introduction-element', appended: false},
              {id:'crun', label: 'crun', element: 'introduction-element', appended: false},
              {id:'more', label: 'more', element: 'introduction-element', appended: false}
            ]},
            {id: 'collaborators', label: 'collaborators',
            style: {
              color: '#8BC34A',
              accent: '#1DE9B6'
            },
            pages:[
              {id:'gaab', label: 'gaab', element: 'introduction-element', appended: false},
              {id:'mgh', label: 'mgh', element:'introduction-element', appended: false},
              {id:'alumni', label: 'alumni', element:'introduction-element', appended: false}
            ]},
            {id: 'events', label: 'events',
            style: {
              color: '#673AB7',
              accent: '#1DE9B6'
            },
            pages:[
              {id:'calendar', label: 'calendar', element: 'introduction-element', appended: false},
              {id:'2015', label: '2015', element: 'highlight-element', appended: false},
              {id:'2014', label: '2014', element: 'highlight-element', appended: false},
              {id:'2013', label: '2013', element: 'highlight-element', appended: false},
              {id:'2012', label: '2012', element: 'highlight-element', appended: false},
              {id:'2011', label: '2011', element: 'highlight-element', appended: false}
            ]},
            {id: 'talks', label: 'talks',
            style: {
              color: '#FF5722',
              accent: '#1DE9B6'
            },
            pages:[
              {id:'live', label: 'live', element: 'introduction-element', appended: false},
              {id:'fnndsc', label: 'fnndsc', element: 'highlight-element', appended: false},
              {id:'unix', label: 'unix', element: 'highlight-element', appended: false}
            ]}
  ];

})(window, document);