
clock = new Clock(0, 0, 0);

async function timer()
{
	while (1)
	{
		clock.tick();
		console.log(this.hours, 'h', this.minutes, 'm', this.seconds, 's');
		await new Promise(r => setTimeout(r, 100));
		console.clear();
	}
}

timer();
