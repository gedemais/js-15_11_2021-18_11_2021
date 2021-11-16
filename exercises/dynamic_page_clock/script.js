function Clock(start_hours, start_minutes, start_seconds)
{
	this.hours = start_hours;
	this.minutes = start_minutes;
	this.seconds = start_seconds;

	this.tick = function ()
	{
		this.seconds++;

		if (this.seconds == 60)
		{
			this.seconds = 0;
			this.minutes++;

			if (this.minutes == 60)
			{
				this.minutes = 0;
				this.hours++;

				if (this.hours == 24)
					this.hours = 0;
			}
		}
	}
}

clock = new Clock(0, 0, 0);

setInterval(async function tick()
{
	let	pHour = document.getElementById('heure'); // Cette ligne ne doit pas etre modifiee.

}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
