({
	block : 'page',
	title : 'Departure board',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=VT323' },
		{ elem : 'css', url : '_index.css' }
	],
	content : [
		{
			block: 'board',
			content: [
				{
					elem: 'header',
					mods: {depature: true},
					content: [
						{
							elem: 'title',
							content: 'Departures'
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-time'},
							content: ['Time', 'Вылет']
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-destination'},
							content: ['Destination', 'Прилет']
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-flight'},
							content: 'Flight'
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-counter'},
							content: 'Counter'
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-boarding'},
							content: ['Boarding', 'Посадка']
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-gate'},
							content: ['Gate', 'Выход']
						}
					]
				},
				{
					elem: 'rows',
					content: [
						{
							elem: 'row',
							content: [
								{elem: 'time', content: '14:20'},
								{elem: 'destination', content: 'Praga'},
								{elem: 'flight', content: 'JKK 8845'},
								{elem: 'counter', content: '66/71'},
								{elem: 'boarding', content: '13:54'},
								{elem: 'gate', content: '214'}
							]
						},
						{
							elem: 'row',
							content: [
								{elem: 'time', content: '14:20'},
								{elem: 'destination', content: 'Praga'},
								{elem: 'flight', content: 'JKK 8845'},
								{elem: 'counter', content: '66/71'},
								{elem: 'boarding', content: '13:54'}
							]
						},
						{
							elem: 'row',
							content: [
								{elem: 'time', content: '14:20'},
								{elem: 'destination', content: 'Praga'},
								{elem: 'flight', content: 'JKK 8845'},
								{elem: 'counter', content: '66/71'},
								{elem: 'boarding', content: '13:54'}
							]
						}
					]
				}
			]
		}
	]
})
