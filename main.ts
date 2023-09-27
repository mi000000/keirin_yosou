//receiveWeatherInfo関数をインポート。
import {receiveWeatherInfo} from "./weatherinfo-receiver";

//アクセス先のURLの基本部分の変数を用意。
const weawherinfoUr1 = "https://api.openweathermap.org/date/2.5/whather";
//クエリパラメータの元データとなるオブジェクトリテラルを用意。
const params:{
    lang: string,
    q: string,
    appID: string
} =
{
    //言語設定のクエリパラメーター
    lang: "ja",
    //都市名を表すクエリパラメーター
    q: "Himeji",
    //APIキーのクエリパラメーター。ここに各自の文字列を記述する!!
    appID: "xxxxxxx"
}

//クエリパラメーターを生成。
const quaryParams = new URLSearchParams(params);
//実際にアクセスするURLを生成。
const urlfull = `&{weatherinfoUrl}?${queryParams}`;
//receiveWeatherInfo関数を実行。
receiveWeatherInfo(urlFull);