
clock = new Clock(0, 0, 0);

async function timer()
{
	while (1)
	{
		clock.tick();
		console.log(clock.hours, 'h', clock.minutes, 'm', clock.seconds, 's');
		await new Promise(r => setTimeout(r, 100));
		console.clear();
	}
}

timer();
