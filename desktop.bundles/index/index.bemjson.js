({
	block : 'page',
	title : 'Departure board',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&subset=latin,cyrillic' },
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
						}
					]
				},
				{
					elem: 'rows',
					content: [
						[
							{time: '12:23', destination: 'Praga', flight: 'KHH 1234', counter: '23/12', boarding: '12:21', gate: 21, remarks: 'delayed', description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'},
							{time: '12:45', destination: 'Jerez', flight: 'KHH 1234', counter: '23/12', boarding: '12:21', gate: 21, remarks: '', description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'},
							{time: '13:11', destination: 'Hannover', flight: 'KHH 1234', counter: '23/12', boarding: '12:21', gate: 21, remarks: 'delayed', description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'},
							{time: '13:40', destination: 'Moscu/VKO', flight: 'KHH 1234', counter: '23/12', boarding: '12:21', gate: 21, remarks: 'estim12:30', description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'},
							{time: '15:00', destination: 'Dublin', flight: 'KHH 1234', counter: '23/12', boarding: '12:21', gate: 21, remarks: '', description: 'По самому бюджетному тарифу Light можно будет улететь в одну сторону за 89 евро без багажа (за провоз клади придется доплатить 10 евро). По классическому тарифу перелет обойдется минимум в 129 евро, а если пассажир решит доплатить за возможность взять багаж и получить возможность двигать даты поездки, это ему будет стоить около 300 евро в одну сторону. Ценообразование бизнес-класса не изменится, говорится в сообщении компании.'}
						].map(function(item, i) {
							return [
							{
								elem: 'checkbox',
								name: 'row' + i
							},
							{
									elem: 'row',
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
