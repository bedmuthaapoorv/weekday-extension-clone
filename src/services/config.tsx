// to keep all default values for filters in one place
const config = {
    'filterConfigs': {
        'Min experience': null,
        'Location': null,
        'Remote/on-site': null,
        'Company': null,
        'Role': null,
        'Min base pay': null
    },
    'options': {
        'Min experience': [
            { value: '2', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' }
        ],
        'Location': [],
        'Remote/on-site': [
            { value: 'Remote', label: 'Remote' },
            { value: 'In-office', label: 'In-office' }
        ],
        'Company': [],
        'Role': [],
        'Min base pay': [
            { value: '0', label: '0L' },
            { value: '1', label: '1L' },
            { value: '2', label: '2L' },
            { value: '3', label: '3L' },
            { value: '4', label: '4L' },
            { value: '5', label: '5L' },
            { value: '6', label: '6L' },
            { value: '7', label: '7L' },
            { value: '8', label: '8L' },
            { value: '9', label: '9L' },
            { value: '10', label: '10L' }
        ]
    }
}

export default config;