({
	block : 'page',
	mods: {tall: true},
	title : 'Departure board',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&subset=latin,cyrillic' },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=VT323' },
		{ elem : 'css', url : './_index.css' },
		{ elem : 'js', url : './_index.js' }
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
							content: ['Destination', 'Пункт назначения']
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-flight'},
							content: ['Flight', 'Рейс']
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-counter'},
							content: ['Counter', 'Стойка']
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
						},
						{
							elem: 'col-title',
							mix: {elem: 'col-remarks'},
							content: ['Remarks', 'Примечание']
						},
						{
							elem: 'label',
							for: 'f_delayed',
							mix: {elem: 'btn-boarding'},
							content: 'Объявлена посадка'
						}
					]
				},
				{
					elem: 'rows',
					content: [
						new Array(20).join(',').split(',').map(function(){
							var time = ['12:32', '14:43', '23:12'];
							var destination = ['Praga', 'Moscow', 'London'];
							var flight = ['KHH 1234', 'SK 1234', 'KL 12234'];
							var counter = ['12/23', 'A12', 'D4'];
							var boarding = ['23:12', '10:23', '03:12'];
							var remarks = ['', 'estim12:30', 'delayed'];
							var i = Math.floor(Math.random() * 3);
							return {
								time: time[i],
								destination: destination[i],
								flight: flight[i],
								counter: counter[i],
								boarding: boarding[i],
								gate: 21,
								remarks: remarks[i],
								description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'};
						})
						.map(function(item, i) {
							return [
							{
								elem: 'checkbox',
								name: 'row' + i
							},
							{
									elem: 'row',
									mods: {active: (item.remarks === '')},
									num: i,
									data: item,
									content: [
										{elem: 'time', content: item.time},
										{elem: 'destination', content: item.destination},
										{elem: 'flight', content: item.flight},
										{elem: 'counter', content: item.counter},
										{elem: 'boarding', content: item.boarding},
										{elem: 'gate', content: item.gate},
										{elem: 'remarks', content: item.remarks}
									]
							}
							]
						})
					]
				}
			]
		}
	]
})
