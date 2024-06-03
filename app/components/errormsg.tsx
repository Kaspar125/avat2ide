export default function ErrorMessage({ error }: { error?: string }) {
  return error ? (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">Viga!</span> {error}
    </p>
  ) : null;
}
