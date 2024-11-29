/**
 *
 * <blockquote class="twitter-tweet"><p lang="en" dir="ltr">You can lose yourself one small compromise at a time.<br><br>You can transform yourself one small win at a time.</p>&mdash; James Clear (@JamesClear) <a href="https://twitter.com/JamesClear/status/1862195879475564650?ref_src=twsrc%5Etfw">November 28, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
 */

import { MyContext } from '../index';

export default async function postCommand(ctx: MyContext) {
  await ctx.reply(
    `<blockquote class="twitter-tweet">
  <b lang="en" dir="ltr">
    You can lose yourself one small compromise at a time.
    \n
    \n
    You can transform yourself one small win at a time.
  </b>
  &mdash; James Clear (@JamesClear)
  <a
    href="https://twitter.com/JamesClear/status/1862195879475564650?ref_src=twsrc%5Etfw"
  >
    November 28, 2024</a
  >
</blockquote>
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charset="utf-8"
></script>
`,
    {
      parse_mode: 'HTML',
    },
  );
}
