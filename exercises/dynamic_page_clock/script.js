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



async function tick()
