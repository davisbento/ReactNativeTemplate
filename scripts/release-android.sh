set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"

echo "GENERATING APK"

node $BASEDIR/change-version.js
rm -f $BASEDIR/../App.aab
(cd $BASEDIR/../android && ./gradlew bundleRelease)
mv $BASEDIR/../android/app/build/outputs/bundle/release/app.aab $BASEDIR/../App.aab
