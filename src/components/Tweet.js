import React from 'react';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.tweets = [
      'National Thanksgiving Turkey at the luxurious Executive Board Room is electric!',
      'Crooked & the Gang off the base came directly from the Koran.',
      'Obama spoke for a hurricane before, & it became a hot commodity!',
      'Playef golf today with Prime Minister Trudeau is being punished for his strong statement to Congress, with millions of people warm & the drugs will stop the Iranian people deserve the truth.',
      'The Arab Spring has turned up that is why we need in Washington D.C.',
      'I become President of the most popular Republican Congressmen were brought to the United States Senator openly, and for good deals.',
      'Up--How I turned down The Club For Growth crazy request for Ukraine and other work I am giving away our strategy to confront the devastating tornadoes in the Republican Partys California Gubernatorial Candidate, John Cox.',
      'Nobody ever heard of testifying about the debt ceiling.',
      'Meetings are going out of insecure mind-but I have a wing featuring Supreme Court Justice.',
      'Perry of Pennsylvania challenge the NFL will be a very Happy and Bountiful Thanksgiving!',
      'Community disappointed Mueller didnt investigate the national security by making us more debt and a failed Senator like goofy Elizabeth Warrens records to see why unions are doing with tonight at 9.',
      'Hanukkah last night by the media, voter fraud cheaters, th',
      'So excited to be true now, that we cannot safely vet.',
      'The 9/11 trials at Gitmo over the most inaccurate stories of African American unemployment rate ever for Congress to pass the #USMCA benefit Americas farmers, ranchers, and businesses.',
      'Weiner- good news is #FakeNews and more like them?',
      'National Call Day, and a group of people, save taxpayer dollars, and keep your health care and tax reform legislation, 879 Opportunity Zones help lift low income families the hardest.',
      'With IRS Chief Great investigative work by my side, would make America a safer place, though hard to determine the results, and theyre making their voices heard loud & clear.',
      'Years ago, when he entered office then the terrorists win.',
      'Hampshire and then off to great patriots and fully understand where I just approved a 19 Billion Dollar reduction in the Senate this week the Fake News before it is a record amount of time, this is all a big difference - and that is GOOD and JUST and DECENT and RIGHT!',
      'JW 60 Seconds: John Hackett, former Director of Research, Federal Reserve to LEAD.',
      'Seth is absolutely vital to their own sinister purposes.',
      'One at MCAS Cherry Point in the Roosevelt Room, waiting to be there all week',
      'The ultimate Golf experience, is a member of Congress, including Democrats, about imposing powerful Sanctions on Turkey.',
      'I explain that we have our brave men and women of the nice words!',
      'Hence, they were at a later date so we can ever take it into a political bias against an Iranian drone....',
      '7:00pm MDT in Billings, Montana for a long recorded history - 4 degrees.',
      'Carolina, are the only positive VISION for our country has tremendous hatred of Israel and Regional Stability!',
      'Fonda and Michael Douglas just another politician to the past, just plain doesnt like is up over 50%.',
      'Lets keep it going - I love you, support you, and we look at but also cause War!',
      'NEW TOTALITARIANS: GOP elites join with the wonderful and unforgettable visit, Prime Minister Theresa May today to award them the face of grave danger....',
    ];
    this.state = { index: Math.floor(Math.random() * this.tweets.length) };
  }

  changeIndex() {
    this.setState({ index: Math.floor(Math.random() * this.tweets.length) });
  }

  render() {
    return <p>{this.tweets[this.state.index]}</p>;
  }
}

export default Tweet;
