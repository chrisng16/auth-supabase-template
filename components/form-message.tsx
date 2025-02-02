export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm mb-6">
      {"success" in message && (
        <div className="text-emerald-800 border-l-2 border-emerald-500 bg-emerald-100 p-2">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-red-800 border-l-2 border-red-500 bg-red-100 p-2">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-foreground border-l-2 p-2">{message.message}</div>
      )}
    </div>
  );
}
