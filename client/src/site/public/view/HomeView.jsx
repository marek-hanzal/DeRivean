import React from "react";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";

const HomeView = () =>
	<PublicView
		title='public.home.title'
		open={[PublicPath.root]}
		selected={[PublicPath.root]}
	>
		<h1>Theophrastus mediocriterne delectat, cum tractat locos ab Aristotele ante tractatos?</h1>

		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Poterat autem inpune; Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista popularia. Qui enim existimabit posse se miserum esse beatus non erit. Duo Reges:
		   constructio interrete. Quis istud possit, inquit, negare? Quia nec honesto quic quam honestius nec turpi turpius. </p>

		<p>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem. Ut in geometria, prima si dederis, danda sunt omnia. <i>Sed nimis multa.</i> Iubet igitur nos Pythius Apollo noscere
		   nosmet ipsos. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quis enim confidit semper sibi illud stabile et firmum permansurum, quod fragile et caducum sit? Parvi enim primo ortu sic iacent, tamquam omnino
		   sine animo sint. </p>

		<h2>Qua ex cognitione facilior facta est investigatio rerum occultissimarum.</h2>

		<p>Quia nec honesto quic quam honestius nec turpi turpius. <i>Profectus in exilium Tubulus statim nec respondere ausus;</i> Minime vero istorum quidem, inquit. Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et
		   luxuriosus eodem modo. Ut proverbia non nulla veriora sint quam vestra dogmata. <i>Ut proverbia non nulla veriora sint quam vestra dogmata.</i> Quo plebiscito decreta a senatu est consuli quaestio Cn. Non dolere, inquam, istud
		   quam vim habeat postea videro; Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? </p>

		<ul>
			<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>
			<li>Cum praesertim illa perdiscere ludus esset.</li>
		</ul>

		<dl>
			<dt><dfn>Quis hoc dicit?</dfn></dt>
			<dd>Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere.</dd>
			<dt><dfn>Quonam, inquit, modo?</dfn></dt>
			<dd>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi.</dd>
			<dt><dfn>Quid ergo?</dfn></dt>
			<dd>Amicitiam autem adhibendam esse censent, quia sit ex eo genere, quae prosunt.</dd>
			<dt><dfn>Ille incendat?</dfn></dt>
			<dd>O magnam vim ingenii causamque iustam, cur nova existeret disciplina! Perge porro.</dd>
		</dl>

		<blockquote cite="http://loripsum.net">
			Haec mirabilia videri intellego, sed cum certe superiora firma ac vera sint, his autem ea consentanea et consequentia, ne de horum quidem est veritate dubitandum.
		</blockquote>

		<h3>Qui ita affectus, beatum esse numquam probabis;</h3>

		<p>Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Hanc ergo intuens debet institutum illud quasi signum absolvere. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Ut
		   non sine causa ex iis memoriae ducta sit disciplina. <mark>Eiuro, inquit adridens, iniquum, hac quidem de re;</mark>
			<mark>Utrum igitur tibi litteram videor an totas paginas commovere?</mark>
		</p>
	</PublicView>
;

export default HomeView;
